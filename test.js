module.exports = async (attractionName, client) => {
    const result = await client.query('INSERT INTO "attraction" ("name", "capacity", "open_time", "closer_time") VALUES ($1, $2, $3, $4)',
    [attractionName.fullname, attractionName.capacity, attractionName.hourOpen, attractionName.hourCloser])
    return result;
}


