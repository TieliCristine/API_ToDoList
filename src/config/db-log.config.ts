import { Logger, QueryRunner } from 'typeorm';
export const logger: Logger = {

    log(level: "log" | "info" | "warn", message: any, queryRunner?: QueryRunner): any {
        console.log('level: ', level)
        console.log('message: ', message)
        console.log('queryRunner: ', queryRunner)
    },

    logQuery: (query: string, parameters?: any[]) => {
        console.log('query: ', query)
        console.log('parameters: ', parameters)
    },
    logQueryError: (error: string | Error, query: string, parameters?: any[]) => {
        console.log('error: ', error)
        console.log('query: ', query)
        console.log('parameters: ', parameters)
    },
    logMigration(message: string, queryRunner?: QueryRunner): any {
        // console.log('message: ', message)
        // console.log('queryRunner: ', queryRunner)
    },
    logQuerySlow(time: number, query: string, parameters?: any[], queryRunner?: QueryRunner): any {

    },
    logSchemaBuild(message: string, queryRunner?: QueryRunner): any {
        // console.log('message: ', message)
        // console.log('queryRunner: ', queryRunner)
    }

}