const { people } = require("../data");

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
};

const createPerson = (req, res) => {
    const { name } = req.body;
    console.log(req.body);
    if (!name) {
        return res
            .status(400)
            .send({ success: false, msg: "Please Provide Credential" });
    }
    res.status(201).json({ success: true, person: name });
};

const createPersonPostman = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(404).send("provide name");
    }
    res.status(200).json({ success: true, data: [...people, name] });
};

const updatePerson = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;

    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        return res.status(404).json({
            success: false,
            msg: `id for ${id} doesnt exist`,
        });
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name;
        }
        console.log(person);
        return person;
    });

    if (!name) {
        return res.status(404).send("provide name to be replace by");
    }
    res.status(200).json(newPeople);
};

const deletePerson = (req, res) => {
    const { id } = req.params;

    const person = people.find((p) => p.id === Number(id));
    if (!person) {
        return res.status(404).send(`no such id as ${id}`);
    }

    const newPeople = people.filter((p) => p.id !== Number(id));

    res.status(200).json({ success: true, data: newPeople });
};

module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson,
};
