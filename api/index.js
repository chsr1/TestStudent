
// // const express = require("express");
// // const { MongoClient, ObjectId } = require("mongodb");
// // const session = require("express-session");

// // const app = express();
// // const PORT = 3000;

// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());

// // app.use(
// //   session({
// //     secret: "student-secret",
// //     resave: false,
// //     saveUninitialized: false
// //   })
// // );

// // const url =
// //   "mongodb+srv://Testuser:Testuser@cluster0.vnvsup4.mongodb.net/?retryWrites=true&w=majority";


// // const client = new MongoClient(url);

// // let db;

// // async function connectDB() {
// //   try {
// //     await client.connect();

// //     console.log("MongoDB Atlas Connected Successfully");

// //     db = client.db("SchoolDB");

// //     app.listen(PORT, () => {
// //       console.log(`Server running at http://localhost:${PORT}/students`);
// //     });
// //   } catch (err) {
// //     console.error("Atlas Connection Error:", err);
// //   }
// // }

// // connectDB();
// // // display (list) and create student records
// // app.get("/students", async (req, res) => {
// // const students = await db.collection("students").find().toArray();
// //      let rows = students.map(s => `
// //         <tr>
// //             <td>${s.rollNo}</td>
// //             <td>${s.name}</td>
// //             <td>${s.grade}</td>
// //             <td>
// //    <a href="/edit-student/${s._id}">[Edit]</a>
// //     <form action="/delete-student/${s._id}" method="POST" style="display:inline;">
// //     <button type="submit" onclick="return confirm('Delete record?')" style="color:red; cursor:pointer; background:none; border:none;">[Delete]</button>
// //                 </form>
// //             </td>
// //         </tr>`).join('');
// //     res.send(`
// //         <style>
// //   table { width: 100%; border-collapse: collapse; margin-top: 20px; }
// //   th, td { border: 1px solid #ddd; padding: 10px; text-align: left; }
// //       th { background-color: #f2f2f2; }
// //   .form-box { background: #f9f9f9; padding: 20px; border: 1px solid #ccc; }
// //         </style>
// //         <h1>Student Management System</h1>
// //             <div class="form-box">
// //             <h3>Register New Student</h3>
// //            <form action="/add-student" method="POST">
// // <input name="rollNo" placeholder="Roll Number" required>
// // <input name="name" placeholder="Full Name" required>
// // <input name="grade" placeholder="Grade (e.g. A, B, C)" required>
// //   <button type="submit">Add Student</button>
// //        </form>
// //         </div>
// //        <table>  
// //           <thead>
// //                 <tr>
// //                     <th>Roll No</th>
// //                     <th>Name</th>
// //                     <th>Grade</th>
// //                     <th>Actions</th>
// //                 </tr>
// //             </thead>
// //  <tbody>${rows || '<tr><td colspan="4">No student records found.</td></tr>'}</tbody>
// //         </table>
// //     `);
// // });
// // // insert
// // app.post("/add-student", async (req, res) => {
// //     const { rollNo, name, grade } = req.body;
// //  await db.collection("students").insertOne({ rollNo, name, grade });
// //     res.redirect("/students");
// // });
// // // edit
// // //  Show the Edit Form
// // app.get("/edit-student/:id", async (req, res) => {
// //     const student = await db.collection("students").findOne({_id: new ObjectId(req.params.id) 
// //     });
// // if (!student) return res.send("Student record not found.");
// //     res.send(`
// //         <h2>Edit Student Record</h2>
// // <form action="/update-student/${student._id}" method="POST">
// //            <label>Roll Number:</label><br>
// //  <input name="rollNo" value="${student.rollNo}" required><br><br>
// //          <label>Full Name:</label><br>
// // <input name="name" value="${student.name}" required><br><br>
// //             <label>Grade:</label><br>
// // <input name="grade" value="${student.grade}" required><br><br>
// //    <button type="submit">Update Record</button>
// //      <a href="/students">Cancel</a>
// //         </form>
// //     `);
// // });

// // // Process the Update
// // app.post("/update-student/:id", async (req, res) => {
// //     const { rollNo, name, grade } = req.body;
// //     await db.collection("students").updateOne(
// //         { _id: new ObjectId(req.params.id) },
// //         { $set: { rollNo, name, grade } }
// //     );
// //     res.redirect("/students");
// // });

// // //delete

// // app.post("/delete-student/:id", async (req, res) => {
// //     await db.collection("students").deleteOne({ 
// //         _id: new ObjectId(req.params.id) 
// //     });
// //     res.redirect("/students");
// // });


// const express = require("express");
// const { MongoClient, ObjectId } = require("mongodb");
// const session = require("express-session");

// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(
//   session({
//     secret: "student-secret",
//     resave: false,
//     saveUninitialized: false
//   })
// );

// const url = process.env.MONGODB_URI;

// const client = new MongoClient(url);

// let db;

// async function connectDB() {
//   try {
//     await client.connect();
//     db = client.db("SchoolDB");
//     console.log("MongoDB Atlas Connected");
//   } catch (err) {
//     console.error(err);
//   }
// }

// connectDB();

// // routes
// app.get("/students", async (req, res) => {
//   const students = await db.collection("students").find().toArray();

//   let rows = students.map(s => `
//     <tr>
//       <td>${s.rollNo}</td>
//       <td>${s.name}</td>
//       <td>${s.grade}</td>
//     </tr>
//   `).join("");

//   res.send(`
//     <h1>Student Management System</h1>
//     <form action="/students/add" method="POST">
//       <input name="rollNo" placeholder="Roll No" required>
//       <input name="name" placeholder="Name" required>
//       <input name="grade" placeholder="Grade" required>
//       <button type="submit">Add Student</button>
//     </form>
//     <table border="1">
//       <tr>
//         <th>Roll No</th>
//         <th>Name</th>
//         <th>Grade</th>
//       </tr>
//       ${rows}
//     </table>
//   `);
// });

// app.post("/students/add", async (req, res) => {
//   const { rollNo, name, grade } = req.body;

//   await db.collection("students").insertOne({
//     rollNo,
//     name,
//     grade
//   });

//   res.redirect("/students");
// });

// module.exports = app;




const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uri = process.env.MONGODB_URI;

let client;
let db;

async function getDB() {
    try {
        if (!db) {
            client = new MongoClient(uri);
            await client.connect();
            db = client.db("SchoolDB");
            console.log("MongoDB Atlas Connected");
        }
        return db;
    } catch (error) {
        console.error("DB Connection Error:", error);
        throw error;
    }
}

app.get("/students", async (req, res) => {
    try {
        const database = await getDB();

        const students = await database
            .collection("students")
            .find()
            .toArray();

        let rows = students.map(s => `
            <tr>
                <td>${s.rollNo}</td>
                <td>${s.name}</td>
                <td>${s.grade}</td>
            </tr>
        `).join("");

        res.send(`
            <h1>Student Management System</h1>
            <form action="/students/add" method="POST">
                <input name="rollNo" placeholder="Roll No" required>
                <input name="name" placeholder="Name" required>
                <input name="grade" placeholder="Grade" required>
                <button type="submit">Add Student</button>
            </form>
            <table border="1">
                <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Grade</th>
                </tr>
                ${rows}
            </table>
        `);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/students/add", async (req, res) => {
    try {
        const database = await getDB();

        const { rollNo, name, grade } = req.body;

        await database.collection("students").insertOne({
            rollNo,
            name,
            grade
        });

        res.redirect("/students");
    } catch (error) {
        console.error(error);
        res.status(500).send("Insert Failed");
    }
});

module.exports = app;