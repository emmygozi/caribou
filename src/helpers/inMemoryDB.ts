


class InMemoryDb {
    static mapInstance(): Map<string, string> {
        const saveKeyAndValue = new Map();
        return saveKeyAndValue;
    }
}

export default InMemoryDb;