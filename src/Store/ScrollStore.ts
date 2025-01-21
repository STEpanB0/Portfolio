import { makeAutoObservable } from 'mobx';

class ScrollStore {
    targetRefs: { [key: string]: React.RefObject<HTMLDivElement> | null } = {};

    constructor() {
        makeAutoObservable(this);
    }

    setRef(key: string, ref: React.RefObject<HTMLDivElement>) {
        this.targetRefs[key] = ref;
    }

    scrollToTarget(key: string) {
        this.targetRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
    }
}

const scrollStore = new ScrollStore();
export default scrollStore;