import {useRouter} from 'next/router'

export default function BlogDater() {
    const router = useRouter();
    const {ptitle} = router.query;
    
        
    return (
        <div className="container">
            <div>
                   <h1>This is the {ptitle}</h1> 
            
            </div>
        </div>
    )
}
