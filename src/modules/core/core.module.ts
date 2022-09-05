import {
  DynamicModule,
  Module,
  ModuleMetadata,
  Provider,
  Type,
} from '@nestjs/common';
import {
  getDataSourceName,
  TypeOrmModule,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { DataSource, ObjectType } from 'typeorm';
import { CUSTOM_REPOSITORY_METADATA } from './constants';

@Module({})
export class CoreModule {
  public static forRoot(options?: TypeOrmModuleOptions) {
    const imports: ModuleMetadata['imports'] = [TypeOrmModule.forRoot(options)];
    return {
      global: true,
      imports,
      module: CoreModule,
    };
  }
  public static forRepository<T extends Type<any>>(
    repositories: T[],
    dataSourceName?: string,
  ): DynamicModule {
    const providers: Provider[] = [];

    for (const repo of repositories) {
      const entity = Reflect.getMetadata(CUSTOM_REPOSITORY_METADATA, repo);

      if (!entity) {
        continue;
      }

      providers.push({
        inject: [getDataSourceName(dataSourceName)],
        provide: repo,
        useFactory: (dataSource: DataSource): typeof repo => {
          const base = dataSource.getRepository<ObjectType<any>>(entity);
          return new repo(base.target, base.manager, base.queryRunner);
        },
      });
    }
  }
}
