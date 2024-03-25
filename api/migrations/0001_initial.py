from django.db import migrations
from api.user.models import Customuser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = Customuser(name="vishnu",
                          email="crackthejack.x@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          phone="9605208603",
                          gender="Male"
                          )
        user.set_password("12345")
        user.save()

    dependencies = [
        ('user','0002_rename_phonenumber_customuser_phone')
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
