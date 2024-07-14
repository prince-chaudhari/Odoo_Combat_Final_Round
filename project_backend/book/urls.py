from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import book_list, book_create, book_delete, book_update

urlpatterns = [
    path('view_books/', book_list),
    path('add_book/', book_create),
    # path('add_book_issue/', add_book_issue),
    path('delete_book/<str:pk>', book_delete),
    path('update_book/<str:pk>', book_update),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)