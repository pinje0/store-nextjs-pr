import Link from "next/link";
import { useRouter } from "next/router";

const LoginPage = () => {
  const { push, query } = useRouter();
  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>login</button>
      <p>
        Don't have an account? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;
