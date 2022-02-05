import Link from "next/link";
import Layout from "../components/layout";
import Footer from "../components/Footer";
import Greeting from "../components/Greeting";
function Index() {
  return (
    <div>
      <Layout />
      <Greeting />
      <Footer />
    </div>
  );
}

export default Index;
