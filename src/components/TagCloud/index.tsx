import { useState } from "react";
import './style.css';

export const TagCloud = () => {
    const [nazev, setNazev] = useState<string>('');
    const tag : Array<string> = ['Jedna', 'Dva', 'Barva'];
    const [tags, setTags] = useState< Array<string>>(tag);

    const handleSubmitNewTag = (e: React.FormEvent<HTMLFormElement | EventTarget>) => {
        let tag = [...tags];
        e.preventDefault();
        let nalezen: number = -1;
        nalezen = tag.indexOf(nazev);
        if ((nalezen === -1) && (nazev !=='')) {
            setTags([...tag, nazev]);
        } else {
            if (nazev !=='') {
                alert('Nepridavam, uz tam je');
            }
        }
    }

    const handleSubmitDeleteTag = (e: React.FormEvent<HTMLFormElement |EventTarget >) => {
        let shortTags = [...tags];
        e.preventDefault();
//        shortTags.shift();
        shortTags.splice(0,1);
        setTags([...shortTags]);
    }

    return (
        <>
        <div className='tagy'>
            {tags.map(t =><div key={t}><label className='tagy-single'>{t}</label></div>)}
        </div>
        <form onSubmit={(e) => handleSubmitNewTag(e) }>
            <div className="tagy-single">
               <label> Name tag: </label>
               <input type="text" onChange={(e) => setNazev(e.target.value)} />
               <input type='button' value='Add tag' onClick={(e) => handleSubmitNewTag(e) } />
            </div>
            <div className="tagy-button">
                <input type='button' value='Del 1.tag' onClick={(e) => handleSubmitDeleteTag(e)} disabled={tags.length===0}/>
            </div>
        </form>
        </>
    );
}