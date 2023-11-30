import { ProductsIndex } from "./ProductsIndex";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Signup } from "./Signup";

export function Content() {
  const products = "hello";

  return (
    <main>
      <h1>Welcome to the Record Store!</h1>
      <Login />
      <Signup />
      <ProductsIndex />
      <LogoutLink />
    </main>
  );
}
