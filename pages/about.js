import Head from "next/head";

const About = () => {
    return ( 
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="about" />
            </Head>
            <div className="container">
                <h1 className="heading">About</h1>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque fugiat quaerat exercitationem est unde inventore! Nesciunt eligendi sed debitis suscipit officia sapiente incidunt possimus aperiam? Consequatur voluptatum provident minus?</p>
                <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. In itaque fugiat quaerat exercitationem est unde inventore! Nesciunt eligendi sed debitis suscipit officia sapiente incidunt possimus aperiam? Consequatur voluptatum provident minus?</p>
            </div>
        </>
     );
}
 
export default About;