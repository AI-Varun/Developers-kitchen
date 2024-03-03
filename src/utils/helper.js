export function filterSearch(allRestraunts, searchText) {

    const filterData = allRestraunts.filter((restraunt) =>
        restraunt.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
