from django.db import models
from datetime import datetime,timedelta
from account.models import User
import uuid

class Book(models.Model):
    ISBN = models.BigIntegerField(primary_key=True)
    book_title = models.CharField(max_length=200)
    book_author = models.CharField(max_length=100)
    book_pages = models.PositiveIntegerField()
    quantity = models.IntegerField()
    summary=models.TextField(max_length=500, help_text="Summary about the book",null=True,blank=True)
    publisher = models.CharField(max_length=100)
    publishedDate = models.DateField(auto_now_add=True)
    book_image = models.ImageField(upload_to ='uploads/', max_length=250, null=True, default=None) 
    previewLink = models.URLField(
        max_length=128, 
        db_index=True, 
        blank=True,
        null=True,
    )
    def __str__(self):
        return self.book_title

def get_returndate():
    return datetime.today() + timedelta(days=8)

# class BookInstance(models.Model):
#     id=models.UUIDField(primary_key=True,default=uuid.uuid4,help_text="Book unique id across the Library")
#     book=models.ForeignKey(Book, on_delete=models.CASCADE,null=True)
#     book_number=models.PositiveIntegerField(null=True,help_text="Book number for books of the save kind")
#     Is_borrowed = models.BooleanField(default=False)
#     def __str__(self):
#         return f"{self.id} {self.book}"

class Book_Issue(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    issue_date = models.DateTimeField(auto_now=True,help_text="Date the book is issued")
    due_date = models.DateTimeField(default=get_returndate(),help_text="Date the book is due to")
    date_returned=models.DateField(null=True, blank=True,help_text="Date the book is returned")

    def __str__(self):
        return self.student.fullname + " borrowed " + self.book.book_title