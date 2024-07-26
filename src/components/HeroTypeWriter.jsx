import { Typewriter } from "react-simple-typewriter";


const HeroTypeWriter = () => {
    const handleType = (count) => {
        // access word count number
        // console.log(count)
    }

    const handleDone = () => {
        // console.log(`Done after 5 loops!`)
    }
    return (
        <div className="text-center">
            <h1 style={{ paddingTop: '2rem', margin: 'auto 0', fontSize: '40px', fontWeight: 'normal' }}>
                Where to next? {' '}
                <span style={{ color: '#8D493A', fontSize: '40px', fontWeight: 'bold' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['France', 'Italy', 'Spain', 'England', 'Netherlands', 'Switzerland']}
                        loop={10}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        onLoopDone={handleDone}
                        onType={handleType}
                    />
                </span>
            </h1>
        </div>
    );
};

export default HeroTypeWriter;