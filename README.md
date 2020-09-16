# smart-brain-app
Full stack JavaScript SPA, done with React.js, Node.js, PostgreSQL, using Clarify API and deployed on Heroku.

Test the appp here:
https://dave-face-recognition-app.herokuapp.com/

Features:

- Register: Validates inputs. Name should have at least 2 characters, password at least 3 and email should contain @ and . characters. If values are valid, and the email does not exist, they are stored in a database, encrypting the password. If register fails, an error message is displayed.

- Sigin: Validates inputs. Checks if user-password paid exists in database. If sign in succeeds, the corresponding user profile is displayed, otherwise an arror message is displayed.

- Face recognition: Once the profile is displayed, the user can enter the url of an image. If the image contains human faces, the user entries are incremented by the number of the recognised faces. If the url is not valid, an error message is displayed. Face detection is done using Clarifai API.

If you want to see the backend API, see the repository:
https://github.com/dboland77/Faceapp_backend_API

Future developments:

- Make the application responsive (especially on mobile devices)
