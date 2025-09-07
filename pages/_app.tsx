import Layout from "../components/Layout";
import "../styles/bootstrap-4.6.min.css";
import "../styles/globals.css";
import "../styles/slider.css";
import "../styles/font-awesome.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <script
        type="text/javascript"
        src="/assets/js/jquery.slim.min.js"
      ></script>
      <script type="text/javascript" src="/assets/js/bootstrap.min.js"></script>
      <script type="text/javascript" src="/assets/js/slider.js"></script>
      <script
        type="text/javascript"
        src="/assets/js/jquery.bcSwipe.min.js"
      ></script>
    </>
  );
}

export default MyApp;
