import style from "./Login.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={style.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>login</button>
      <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
        Don't have an account? <Link href={"/auth/register"}>Register</Link>
      </p>
    </div>
  );
};

export default LoginViews;
