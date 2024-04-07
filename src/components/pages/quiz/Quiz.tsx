import { Undo2 } from 'lucide-react';
import { AnswerButtons } from '../../AnswerButtons';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

export const Quiz = () => {
    return (
        <div className="flex-1 flex flex-col gap-12 w-full p-6">
            <div className="w-full flex justify-end">
                <Link to={'/'}>
                    <Button className="p-3 text-lg" variant={'ghost'}>
                        <Undo2 />
                        <span className="mx-2">Leave</span>
                    </Button>
                </Link>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dzynqn10l/image/upload/v1633196203/Msc/pokemon-bg_ig4uv3.jpg" />
            </div>
            <h3 className="text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                What is this pokemon?
            </h3>
            <AnswerButtons pokemonList={[]} />
        </div>
    );
};
