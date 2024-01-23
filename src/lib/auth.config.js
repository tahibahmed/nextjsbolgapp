export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  secret: "GK3FmHG0tpPt5NmaLmXkfuMSJfnQYWduX5R6SD387RU=",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      console.log(auth);
     const user = auth?.user;
      const isOnadmin = request.nextUrl?.pathname.startsWith("/admin");
      const isOnblog = request.nextUrl?.pathname.startsWith("/blog");
      const isOnlogin = request.nextUrl?.pathname.startsWith("/login");

      if (isOnadmin && !user?.isAdmin) {
        return false;
      }
      if (isOnblog && !user) {
        return false;
      }
      if (isOnlogin && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }
      return true;
     },
   },
};
