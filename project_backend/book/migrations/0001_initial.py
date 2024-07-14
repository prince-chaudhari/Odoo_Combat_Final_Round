# Generated by Django 5.0.7 on 2024-07-14 09:39

import datetime
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Book',
            fields=[
                ('ISBN', models.BigIntegerField(primary_key=True, serialize=False)),
                ('book_title', models.CharField(max_length=200)),
                ('book_author', models.CharField(max_length=100)),
                ('book_pages', models.PositiveIntegerField()),
                ('quantity', models.IntegerField()),
                ('summary', models.TextField(blank=True, help_text='Summary about the book', max_length=500, null=True)),
                ('publisher', models.CharField(max_length=100)),
                ('publishedDate', models.DateField(auto_now_add=True)),
                ('book_image', models.ImageField(default=None, max_length=250, null=True, upload_to='uploads/')),
                ('previewLink', models.URLField(blank=True, db_index=True, max_length=128, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Book_Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('issue_date', models.DateTimeField(auto_now=True, help_text='Date the book is issued')),
                ('due_date', models.DateTimeField(default=datetime.datetime(2024, 7, 22, 15, 9, 27, 138844), help_text='Date the book is due to')),
                ('date_returned', models.DateField(blank=True, help_text='Date the book is returned', null=True)),
                ('book', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='book.book')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]