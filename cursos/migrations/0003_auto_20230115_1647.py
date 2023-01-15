# Generated by Django 3.2 on 2023-01-15 16:47

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('cursos', '0002_auto_20230115_1640'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='curso',
            name='comprador',
        ),
        migrations.AddField(
            model_name='curso',
            name='comprador',
            field=models.ManyToManyField(related_name='comprador', to=settings.AUTH_USER_MODEL),
        ),
    ]
