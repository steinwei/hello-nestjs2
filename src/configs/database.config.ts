import { TypeOrmModuleOptions } from 'typeorm';

export const database: () => TypeOrmModuleOptions = () => ({
  entities: [],
  autoLoadEntities: true,
  synchronize: process.env.NODE_ENV !== 'production',
});
