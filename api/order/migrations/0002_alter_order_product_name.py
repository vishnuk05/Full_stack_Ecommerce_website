# Generated by Django 5.0.1 on 2024-03-04 16:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='product_name',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]