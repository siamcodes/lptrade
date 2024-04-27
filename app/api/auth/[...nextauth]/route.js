// use authOptions in [...nextauth]/route
// app/api/auth/[...nextauth]/route
import NextAuth from "next-auth";
import { authOptions } from "@/utils/authOptions";
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };