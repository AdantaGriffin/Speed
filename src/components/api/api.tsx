import {useState, useEffect, createContext, useContext} from 'react';

type Story = {
    id: string;
    name: string;
    type: string;
    wordct?: number;
    cover: string;
    brief?: string;
    story: string[];
    trending: boolean;
    language: string;
};

type Category = {
    id: string;
    category: string;
    image: string;
    short: string;
}


type ApiContextType = {
    categories: Category[];
    stories: Story[];
    level: number;
    visibleText: string;
    isPlaying: boolean;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
    setVisibleText: React.Dispatch<React.SetStateAction<string>>;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    setLevel: React.Dispatch<React.SetStateAction<number>>;
    setStories: React.Dispatch<React.SetStateAction<Story[]>>;
    setCategories: React.Dispatch<React.SetStateAction<Category[]>>;
};
const ApiContext = createContext<ApiContextType | null>(null);

export function ApiProvider({ children }: { children: React.ReactNode }){
    
    //create all useState and functions here to be exported via API Provider 
    const [stories, setStories] = useState<Story[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [level, setLevel] = useState<number>(2500);
    const [visibleText, setVisibleText] = useState<string>("");
    const [, setIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    //get data
    useEffect(() => {
        async function getData(){
            const response = await fetch('/stories.json');
            const result = await response.json();
            //console.log(result.stories);
            setStories(result.stories)
        }
        getData()
    },[])
    //get categories
    useEffect(() => {
        async function getCategories(){
            const response = await fetch('/categories.json');
            const result = await response.json();
            //console.log(result.categories);
            setCategories(result.categories)
        }
        getCategories()
    }, []);
    //set story playmode
    
    
    return(
        <ApiContext.Provider
            value={{stories, setStories, level, setLevel, categories, setCategories, visibleText, setVisibleText, setIndex, isPlaying, setIsPlaying}}// pass all useState in here so outside components can use
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within ApiProvider");
    }

    return context;
}