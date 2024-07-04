import { useRouter } from 'next/router';

const BeginnerLevelPage = () => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            <h1>Beginner Level: {id}</h1>
            {/* Your content for the specific beginner level */}
        </div>
    );
};

export default BeginnerLevelPage;