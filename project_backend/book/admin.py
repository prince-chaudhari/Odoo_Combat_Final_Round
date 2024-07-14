from django.contrib import admin

from .models import Book, Book_Issue


admin.site.register(Book)
admin.site.register(Book_Issue)