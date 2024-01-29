import tornado.web


accountDatabase = {
    "alice": {
        "realname": "Alice Smith",
        "dateOfBirth": "Jan 1",
        "email": "alice@example.com",
        "picture": "/static/AlicePFP.png"
    }, "bob": {
        "realname": "Bob Jones",
        "dateOfBirth": "Dec 31",
        "email": "bob@bob.xyz",
        "picture": "/static/BobPFP.png"
    }, "carol": {
        "realname": "Carol Ling",
        "dateOfBirth": "Jul 17",
        "email": "carol@example.com",
        "picture": "/static/CarolPFP.png"
    }, "dave": {
        "realname": "Dave N. Port",
        "dateOfBirth": "Mar 14",
        "email": "dave@dave.dave",
        "picture": "/static/DavePFP.png"
    }

}

class Handler(tornado.web.RequestHandler):
    def get(self):
        p = self.request.path
        uname = p.split("/")[2]
        PlaceholderText = "Username:"
        #self.write(f'Username: {uname} \n')
        #self.write(f'Real Name: {accountDatabase[uname]["realname"]} \n')
        #self.write(f'Date of Birth: {accountDatabase[uname]["dateOfBirth"]} \n')
        #self.write(f'Email: {accountDatabase[uname]["email"]} \n')
        mustache = accountDatabase[uname]["picture"]

        self.render( "UserInfoOrganizer.html", uname = uname, dob = accountDatabase[uname]["dateOfBirth"], 
                    email = accountDatabase[uname]["email"], rname = accountDatabase[uname]["realname"], mustache = mustache)


        