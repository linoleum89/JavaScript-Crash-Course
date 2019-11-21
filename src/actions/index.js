export function addCar(payload) {
    return { type: "ADD_CAR", payload };
};

export function isLoading(payload) {
    return { type: "IS_LOADING", payload };
};