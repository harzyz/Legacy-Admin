"use client"
import Beginners from '@/app/levels/beginners/beginners';
import Intermediate from '@/app/levels/intermediate/intermediate';
import { useParams } from 'next/navigation';

const page = () => {
    const { id } = useParams();

    return (
        <div>
            {/* <h1>Beginner Level: {id}</h1> */}
            <Intermediate id={id} />
            {/* Your content for the specific beginner level */}
        </div>
    );
};

export default page;