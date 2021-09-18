import {useEffect, useRef} from "react";

export const useObserver = (ref, canLoad, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;

        // console.log((`вход в обсёрвер: ${observer.current}`))
        if(observer.current) {
            observer.current.disconnect();
        }
        // console.log((`после обновления обсёрвер: ${observer.current}`))

        let cb = (entries, observer) => {
            if(entries[0].isIntersecting && canLoad) {
                console.log("отработал useObserver")
                callback()
            }
        };

        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);

    }, [isLoading]);
}