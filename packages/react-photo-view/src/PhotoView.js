import { Children, cloneElement, useContext, useEffect, useRef } from 'react';
import useInitial from './hooks/useInitial';
import useMethods from './hooks/useMethods';
import PhotoContext from './photo-context';
const PhotoView = ({ src, render, overlay, width, height, children }) => {
    const photoContext = useContext(PhotoContext);
    const key = useInitial(() => photoContext.nextId());
    const originRef = useRef(null);
    useEffect(() => {
        return () => {
            photoContext.remove(key);
        };
    }, []);
    function invokeChildrenFn(eventName, e) {
        if (children) {
            const eventFn = children.props[eventName];
            if (eventFn) {
                eventFn(e);
            }
        }
    }
    const fn = useMethods({
        render(props) {
            return render && render(props);
        },
        click(e) {
            photoContext.show(key);
            invokeChildrenFn('onClick', e);
        },
    });
    useEffect(() => {
        photoContext.update({
            key,
            src,
            originRef,
            render: fn.render,
            overlay,
            width,
            height,
        });
    }, [src]);
    if (children) {
        return Children.only(cloneElement(children, { onClick: fn.click, ref: originRef }));
    }
    return null;
};
export default PhotoView;
