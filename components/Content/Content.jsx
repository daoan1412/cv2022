export default function Content({ children, icon, title }) {
    return <div className="container mx-auto flex sm:flex-row flex-col sm:py-6 py-4 px-4 border-b">
        <div className="font-medium flex-none text-orange-500 sm:w-48 md:w-56 lg:w-64 mb-2 sm:mb-0 sm:self-center">
            <i className={icon}></i>&nbsp; {title}
        </div>
        <div className="font-light text-base">
            {children}
        </div>
    </div>
}