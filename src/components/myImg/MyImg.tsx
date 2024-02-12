export default function MyImg({ containerStyles }: ImgProps) {
    return (
        <div className={`${containerStyles}`}>
            <img src="/check.png" alt="Profile Picture" className="object-contain" />
        </div>
    )
}
interface ImgProps {
    containerStyles: string;
}
