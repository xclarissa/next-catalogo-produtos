import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuário", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === "admin" && credentials.password === "123") {
          return { id: "1", name: "Admin user", email: "admin@test.com" };
        }
        return null;
      },
    }),
    //exemplo OAuth com Google
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    // }),
  ],
  pages: {
    signIn: "/login", //criar pagina
  },
});

export { handler as GET, handler as POST };
