import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('items', table => {
    table.increments('id').primary();
    table.string('image').notNullable();
    table.string('title').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('items');
}

//VOLTAR O VIDEO NUNS 57 MINUTOS, TEM ALGO DANDO ERRADO NA TABELA ITEM
//ACHO QUE O ITEMS E ITEM TA DANDO ERRADO
//COMANDIS
//npm run knex:seed
//npm run knex:migrate