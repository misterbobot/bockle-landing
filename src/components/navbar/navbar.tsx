import { TextLink } from "../textLink";

export const NavBar: React.FC = () => {

    return (
        <div className="w-full flex flex-col box-border py-4 px-6 text-xl font-bold border-0 border-b border-black relative">
            <a href="/" className=" w-full text-center sm:hidden block text-[40px] font-extrabold mb-3">
                BŌCKLĒ
            </a>
            <div className="flex sm:justify-start justify-center ">
                <TextLink text="men" href="/brand/men" />
                <TextLink className="ml-10" text="woman" href="/brand/woman" />
                <TextLink className="ml-10" text="fw 24" href="/brand/fw24" />
            </div>
            <a href="/brand" className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-2/4 -translate-y-2/4 text-[40px] font-extrabold">
                BŌCKLĒ
            </a>
        </div>
        
    );
}