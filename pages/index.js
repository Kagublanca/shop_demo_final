import Link from "next/link";
import Layout from "../components/layout";
import Footer from "../components/Footer";
function Index() {
  return (
    <div>
      <Layout />
      <h1>Welcome to Ralphs!</h1>
      <h2>
        Please
        <Link href="/account">
          <a>sign in</a>
        </Link>
        to get the best experience! Not yet with us?
        <Link href="/login">
          <a>Register</a>
        </Link>
        here
      </h2>
      <Footer />
    </div>
  );
}

export default Index;
