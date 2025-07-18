let musicCollection = {
    Albums: [
        {
            title: "Title1",
            artist: "Artist1",
            year: "Year1",
        },
        {
            title: "Title2",
            artist: "Artist2",
            year: "Year2",
        },
        {
            title: "Title3",
            artist: "Artist3",
            year: "Year3",
        },
        {
            title: "Title4",
            artist: "Artist4",
            year: "Year4",
        },
        {
            title: "Title5",
            artist: "Artist5",
            year: "Year5",
        },
    ],
};



musicCollection[Symbol.iterator] = function () {
    return this.Albums[Symbol.iterator]();
}

for (let album of musicCollection) {
    console.log(`Title: ${album.title}, Artist: ${album.artist}(${album.year})`);
}
