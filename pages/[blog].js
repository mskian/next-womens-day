import Head from "next/head"
import Image from "next/image"
import axios from "axios"
import { useState } from "react"
import { Fade, Bounce, Slide } from "react-awesome-reveal"
import slugify from "slugify"
import Typist from "react-typist"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Blog = ({ santhosh }) => {
  const wishername = santhosh[0].content
  const slugname = santhosh[0].slug
  const pathname = "https://womensday.tamilwords.net/" + slugname + "/"
  const sharetext = encodeURIComponent(
    wishername + " Wishing you a Happy Women's Day " + pathname
  )
  const Whatsappshare = `https://api.whatsapp.com/send/?text=${sharetext}`
  const Telegramshare =
    "https://telegram.me/share/url?url=" +
    pathname +
    "&text=" +
    wishername +
    " Wishing you a Happy Women's Day"
  const copied = () => {
    toast.dark("📝 Copied", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      closeButton: false,
    })
  }
  //toast.success("😊 \n" + wishername, {
  //  position: "top-right",
  //  autoClose: 2500,
  //  hideProgressBar: true,
  //  closeOnClick: true,
  //  pauseOnHover: true,
  //  draggable: true,
  //  progress: undefined,
  //  closeButton: false,
  //})
  const [username, setInput] = useState("")
  const subscribe = e => {
    e.preventDefault()
    if (username == 0) {
      console.log("Empty Title or Message")
      toast.error("🤖 Empty Name", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        closeButton: false,
      })
      return false
    }
    //const users = encodeURIComponent(input)
    const users = slugify(username, {
      replacement: "-",
      remove: /[*+~.()'"!:@]/g,
      lower: false,
      strict: false,
    })
    window.location.href = `/${users}/`
  }
  return (
    <section className="section">
      <Head>
        <meta name="HandheldFriendly" content="True" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <title>{`${
          wishername +
          " Wishing you a Happy Women's Day (மகளிர் தின வாழ்த்துகள்) 💛"
        }`}</title>
        <meta
          name="description"
          content="Happy Women's Day - மகளிர் தினம் Wishes in Tamil and Name Wish Greetings."
        />
        <meta
          property="og:title"
          content={`${
            wishername +
            " Wishing you a Happy Women's Day (மகளிர் தின வாழ்த்துகள்) 💛"
          }`}
        />
        <meta
          property="og:site_name"
          content={`${
            wishername +
            " Wishing you a Happy Women's Day (மகளிர் தின வாழ்த்துகள்) 💛"
          }`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Happy Women's Day - மகளிர் தினம் Wishes in Tamil and Name Wish Greetings."
        />
        <meta
          property="og:image"
          content="https://womensday.tamilwords.net/sanwebwish.png"
        />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/santhoshveercom"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${
            wishername +
            " Wishing you a Happy Women's Day (மகளிர் தின வாழ்த்துகள்) 💛"
          }`}
        />
        <meta
          name="twitter:description"
          content="Happy Women's Day - மகளிர் தினம் Wishes in Tamil and Name Wish Greetings."
        />
        <meta
          name="twitter:image"
          content="https://womensday.tamilwords.net/sanwebwish.png"
        />
        <meta name="twitter:site" content="@santhoshveerece" />
        <link rel="canonical" href={pathname} />
        <meta name="twitter:url" content={pathname} />
        <meta property="og:url" content={pathname} />

        <link rel="preconnect" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.google.com" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              publisher: {
                "@type": "Organization",
                name: `${wishername} Wishing you a Happy Women's Day (மகளிர் தின வாழ்த்துகள்) 💛`,
                url: `${pathname}`,
                logo: {
                  "@type": "ImageObject",
                  url: "https://womensday.tamilwords.net/logo.png",
                  width: 60,
                  height: 60,
                },
              },
              url: `${pathname}`,
              image: {
                "@type": "ImageObject",
                url: "https://womensday.tamilwords.net/sanwebwish.png",
                width: 1200,
                height: 630,
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `${pathname}`,
              },
              description:
                "Happy Women's Day - மகளிர் தினம் Wishes in Tamil and Name Wish Greetings.",
            }),
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-71LZH45GM6"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if(true) {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-71LZH45GM6', {
                'page_title' : '${wishername} Wishing you a Happy Womens Day (மகளிர் தின வாழ்த்துகள்) 💛',
                'page_location': '${pathname}'
              });
             }`,
          }}
        />
      </Head>
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-half">
            <Slide triggerOnce>
              <br />
              <h1 className="title is-6 has-text-warning has-text-centered">
                <Typist
                  avgTypingDelay={40}
                  startDelay={1800}
                  cursor={{ hideWhenDone: true }}
                >
                  மகளிர் தின வாழ்த்துகள் 💛
                </Typist>
              </h1>
              <br />
              <Bounce>
                <p className="is-size-6 has-text-centered">
                  💚 {wishername} 💚
                </p>
              </Bounce>
            </Slide>
            <br />
            <Slide triggerOnce>
              <Fade>
                <figure className="image is-centered">
                  <Image
                    src="/womens-day-1.png"
                    alt="Happy Women's Day"
                    width={190}
                    height={190}
                  />
                </figure>
              </Fade>
            </Slide>
            <br />
            <Slide triggerOnce>
              <div className="notification has-text-weight-bold read-more">
                <p className="has-text-weight-bold has-text-left">
                  ஆம் ஒரு ஆணின் வெற்றிக்கு 💚
                  <br />
                  பின்னால் இருப்பாள்
                  <br />
                  அது அன்னையோ
                  <br />
                  தோழியோ
                  <br />
                  மனைவியோ
                  <br />
                  அந்த அன்பு தரும்
                  <br />
                  தைரியமும் ஊக்கமும்
                  <br />
                  பல கஷ்டங்கள் கடந்து சாதனை ஆக்குகிறது
                  <br />
                  Happy Women's day 💗
                </p>
              </div>
            </Slide>
            <br />
            <Slide triggerOnce>
              <div className="notification-more has-text-weight-bold read-more">
                <p className="has-text-weight-bold has-text-left">
                  பெண்கள் அவர்களின்
                  <br />
                  வேதனை மற்றும் ஆசைகளை
                  <br />
                  வெளிப்படையாக காட்டிக்கொள்ள மாட்டார்கள்
                  <br />
                  அவர்களிடம் சிறிது நேரம்
                  <br />
                  மனம் விட்டு பேசும் போது
                  <br />
                  தான் புரிகிறது அவர்களின்
                  <br />
                  ஆசைகள் மற்றும் இலட்சியங்கள்
                  <br />
                  அவர்களின் உணர்வுகளை மதிப்போம் துணையாய் நிற்போம்
                </p>
              </div>
            </Slide>
            <br />
            <hr />
            <br />
            <div className="notification is-warning has-text-weight-bold">
              <br />
              <h3 className="has-text-centered">Create your Wish 💐</h3>
              <br />
              <div className="control">
                <input
                  className="input"
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter Your Name"
                  value={username}
                  onChange={e => setInput(e.target.value)}
                  required
                />
              </div>
              <br />
              <button
                onClick={subscribe}
                className="button is-link read-random sign-button"
                type="submit"
              >
                Create Wishes
              </button>
            </div>
            <div className="buttons is-centered">
              <ToastContainer />
              <CopyToClipboard text={pathname}>
                <button
                  className="button is-danger read-random"
                  onClick={copied}
                >
                  📝 Copy URL
                </button>
              </CopyToClipboard>
            </div>
            <hr />
            <div className="buttons is-centered">
              <a
                className="button is-success read-random"
                href={Whatsappshare}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                🍔 Whatsapp
              </a>
              <a
                className="button is-info read-random"
                href={Telegramshare}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                🤖 Telegram
              </a>
            </div>
            <ToastContainer />
            <hr />
            <br />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog

Blog.getInitialProps = async context => {
  const { blog } = context.query
  const res = await axios(
    "https://womensday.tamilwords.net/api/wish/" + encodeURIComponent(blog)
  )
  const data = await res.data

  return { santhosh: data }
}
