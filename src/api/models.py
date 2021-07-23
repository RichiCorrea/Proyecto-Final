from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Biker(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    bikername = db.Column(db.String(80), unique = True, nullable=False)
    firstname = db.Column(db.String(80))
    lastname = db.Column(db.String(80))
    password = db.Column(db.String(80), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "bikername": self.bikername,
            "firstname": self.firstname,
            "lastname": self.lastname
            # do not serialize the password, its a security breach
        }
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()



class Helper(db.Model):
    __tablename__ = "helper"
    id = db.Column(db.Integer, primary_key = True)
    biker_id = db.Column(db.Integer, ForeignKey("biker.id"))
    biker = relationship(Biker)
    taller_id = db.Column(db.Integer, ForeignKey("taller.id"))
    taller = relationship(Taller)

    def serialize(self):
        return{
            "id":self.id,
            "bikername":self.bikername,
            "tallerid": self.taller_id
        }
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()




class Taller(db.Model):
    __tablename__ = "taller"
    id = db.Column(db.Integer, primary_key = True)
    tallername = db.Column(db.String(80), unique = True, nullable=False)
    email = db.Column(db.String(80),unique=True)

    def serialize(self):
        return{
            "id" = self.id,
            "tallername" = self.tallername,
            "email" = self.email
        }
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Blog(db.Model):
    __tablename__ = "post"
    id = db.Column(db.Integer, primary_key = True)
    biker_id = db.Column(db.Integer, ForeignKey("biker.id"))
    biker = relationship(Biker)
    taller_id = db.Column(db.Integer, ForeignKey("taller.id"))
    taller = relationship(Taller)

    def serialize(self):
        return{
        "id" = self.id,
        "bikerid" = self.biker_id,
        "tallerid" = self.taller_id
        }
    def save(self):
        db.session.add(self)
        db.session.commit()

    def update(self):
        db.session.commit()
    
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Comment(db.Model):
    __tablename__ = "comment"
    id = db.Column(db.Integer, primary_key = True)
    comment_text = db.Column(db.String(200))
    author_id = db.Column(db.Integer, ForeignKey("biker.id"))
    user = relationship(User)
    blog_id = db.Column(db.Integer, ForeignKey("blog.id"))
    blog = relationship(Blog)

    def serialize(self):
        return{
            "id" = self.id,
            "commenttext" = self.comment_text,
            "authorid" = self.author_id,
            "blogid" = self.blog_id
        }