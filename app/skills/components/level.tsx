export default function Level({level}){
    console.log(level)
    return (
        <div className="flex items-center space-x-[1px]">
            {Array.from({ length: 10 }, (_, i) => (
                
                <div key={i} className={`w-6 h-5 relative ${
                    i < level ? "bg-gray-800" : "bg-gray-300"
                }`}
                style={{
                    clipPath: "polygon(0% 0%, 80% 0%, 100% 50%, 80% 100%, 0% 100%, 20% 50%)",
                }}
                >
                </div>
            ))}
        </div>
    );
}