import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
export const metadata = {
    title: "Portfolio",
    description: "Full-stack Dev",
  };
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
                    
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument