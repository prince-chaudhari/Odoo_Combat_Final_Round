from rest_framework import serializers

# from account.serializers import UserProfileSerializer

from .models import Book, Book_Issue

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ('ISBN', 'book_title', 'book_pages', 'quantity', 'summary', 'publisher', 
                  'publishedDate', 'book_image')

class BookIssueSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book_Issue
        exclude = ['issue_date', 'due_date', 'date_returned']
        