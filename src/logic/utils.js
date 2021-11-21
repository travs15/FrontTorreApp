export default{
    // Format Number
    formatToNumber: function(value) {
        return Number(value).toFixed(0);    
    },
    // Sort alphabetical - obj with name property
    sortAlphabetical: function(a,b){
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    },
}