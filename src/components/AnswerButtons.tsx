import { Button } from './ui/button';

type Props = {
    pokemonList: string[];
};

const mockList = ['asadsad', 'bdsadsad', 'cdsadsa', 'dasdasd'];

export const AnswerButtons = ({ pokemonList }: Props) => {
    return (
        <div className="grid grid-cols-2 md:gap-10 gap-6">
            {/* remove later */}
            {(pokemonList.length === 4 ? pokemonList : mockList).map((name) => (
                <Button
                    className="md:text-xl text-md"
                    key={name}
                    onClick={() => console.log('clicked ', name)}
                >
                    {name}
                </Button>
            ))}
        </div>
    );
};
