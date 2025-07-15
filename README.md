# 📚 NestJS GraphQL Books API

Una API básica construida con **NestJS**, **GraphQL** y **Prisma** para gestionar libros. Ideal como ejemplo introductorio a GraphQL con NestJS.

---

## 🚀 Tecnologías usadas

- [NestJS](https://nestjs.com/)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite](https://www.sqlite.org/) (base de datos por defecto)

---

## ⚙️ Instalación

```bash
git clone https://github.com/tu-usuario/nestjs-graphql-books.git
cd nestjs-graphql-books
npm install


Ejemplos de consultas

obtener todos los libros
query {
  books {
    id
    title
    author
  }
}

obtener libro por id
query {
  book(id: 1) {
    id
    title
    author
  }
}

Crear un libro
mutation {
  createBook(createBookInput: {
    title: "1984",
    author: "George Orwell"
  }) {
    id
    title
    author
  }
}


