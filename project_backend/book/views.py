from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Book
from .serializers import BookSerializer, BookIssueSerializer
from rest_framework.response import Response

@api_view(['GET'])
def book_list(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return Response(serializer.data, safe=False)


@api_view(['POST'])
def book_create(request):
    serializer = BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, safe=False)

    return Response(serializer.errors, safe=False)


@api_view(['DELETE'])
def book_delete(request, pk):
    book = Book.objects.filter(pk=pk)
    if book:
        book.delete()
        return Response({'message': 'book deleted'})
    return Response({'error': 'book not found'})

@api_view(['PATCH'])
def book_update(request, pk):
    book = Book.objects.get(pk=pk)
    serializer = BookSerializer(book, data=request.data, partial = True)
    
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'book updated'})
    return Response(serializer.errors)

# @api_view(['POST'])
# def add_book_issue(request):
#     serializer = BookIssueSerializer(data=request.data)
#     if serializer.is_valid():
#         unsaved_form=serializer.save(commit=False)
#         book_to_save=BookInstance.objects.get(id=unsaved_form.book_instance.id)
#         book_to_save.Is_borrowed=True
#         book_to_save.save()
#         book_to_save.save()
#         serializer.save_m2m()
#         return Response(serializer.data, safe=False)

#     return Response(serializer.errors, safe=False)


