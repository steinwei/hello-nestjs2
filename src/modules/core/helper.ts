import { ObjectLiteral } from "typeorm"
import { PaginateDto } from "./types"

export function toNumber(value?: string | number): string | number | undefined

export function toBoolean(value?: string | number): boolean | undefined

export function toNull(value?: string | null): string | null | undefined

export function manaulPaginate<T extends ObjectLiteral>({page, limit}: PaginateDto, data: T[]): Pagination<T>