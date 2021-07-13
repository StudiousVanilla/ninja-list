import Link from 'next/link'

export const getStaticProps = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas : data}
    }

}

const Ninjas = ({ninjas}) => {

    return ( 
        <div className="container">
            <h1 className="heading">All Ninjas</h1>
                {ninjas.map(ninja=>(
                    <Link href={`/ninjas/${ninja.id}`}>
                        <div key={ninja.id} className="w-full flex items-center py-6 px-6 mb-8 border-l-8 hover:border-blue-500 bg-gray-200">
                                <h3 className="text-2xl">{ninja.name}</h3>
                        </div>
                    </Link>
                ))}
        </div>
     );
}
 
export default Ninjas;